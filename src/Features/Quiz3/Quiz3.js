import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { level3 } from '../../shared/level3'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Quiz1/styles';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

const Quiz3 = (props) => {

    const Items = level3;
    const totalProblems = Items.length - 1;
    const myIcon1 = <Icon name="heart" style={styles.fontIcon} />;
    const myIcon2 = <Icon name="heart-half-full" style={styles.fontIcon} />;
    const myIcon3 = <Icon name="heart-outline" style={styles.fontIcon} />;
    const [question, setQuestion] = useState([]);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const [life, setLife] = useState(3);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [count, setCount] = useState(0)
    const { navigation } = props;

    useEffect(() => {
        itemShuffle();
    }, [props.route.params]);

    useEffect(() => {
        if (question.length > 0) {
            randomOptions();
            setLoading(true);
        }
    }, [question]);

    useEffect(() => {
        if (currentQuestion > 0) {
            randomOptions();
        }
    }, [currentQuestion]);

    useEffect(() => {
        if (life === 0) {
            failedScreen();
        }
    }, [life]);
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setCurrentQuestion(0);
            setLife(3);
            setScore(0);
        });

        return unsubscribe;
    }, [props.navigation]);

    const iconLoop = () => {
        let array = [];
        for (let i = life; i <= life; i++) {
            if (i == 1) {
                array.push(<View key={i}>{myIcon3}</View>);
            } else if (i == 2) {
                array.push(<View key={i}>{myIcon2}</View>);
            } else if (i == 3) {
                array.push(<View key={i}>{myIcon1}</View>);
            }
        }
        return array;
    };

    const randomOptions = () => {
        let names = [];
        let arr = [...question];

        let i = arr.length - 1;

        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        const slice = arr.slice(0, 1);


        /*======================================== shuffle names ======================================*/

        Array.prototype.shuffle = function () {
            for (var i = 0; i < this.length; i++) {
                var a = this[i];
                var b = Math.floor(Math.random() * this.length);
                this[i] = this[b];
                this[b] = a;
            }
        }

        var slice1 = shuffleProperties(slice);
        function shuffleProperties(obj) {
            var new_obj = {};
            var keys = getKeys(obj);
            keys.shuffle();
            for (var key in keys) {
                if (key == "shuffle") continue;
                new_obj[keys[key]] = obj[keys[key]];
            }
            return new_obj;
        }

        function getKeys(slice) {
            var arr = new Array();
            for (var key in slice)
                arr.push(key);
            return arr;
        }

        /*======================================== Push shuffle code ======================================*/


        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                names.push(slice1[0].answer1);
            }
            else if (i == 1) {
                names.push(slice1[0].answer2);
            }
            else if (i == 2) {
                names.push(slice1[0].answer3);
            }
            else {
                names.push(slice1[0].answer4);
            }
        }

        let exists = false;
        for (let i = 0; i < names.length; i++) {
            if (names[i] === question[currentQuestion].answer3) {
                exists = true;
            }
        }

        /*======================================== if doesn't exist let them exist ======================================*/

        if (exists === false) {
            let num, already = new Object;
            let n1 = true;
            let n2, n3, n4 = false
            let start = 0, end = 4;

            for (let i = 0; i < 4;) {
                num = (Math.random() * (end - start) + start) ^ 0;
                if (!(num in already)) {
                    if (n1 == true) {
                        already[num] = num;
                        i++;
                        names.splice(num, 1, question[currentQuestion].answer1);
                        n1 = false
                        n2 = true
                    }
                    else if (n2 == true) {
                        already[num] = num;
                        i++;
                        names.splice(num, 1, question[currentQuestion].answer2);
                        n2 = false
                        n3 = true
                    }
                    else if (n3 == true) {
                        already[num] = num;
                        i++;
                        names.splice(num, 1, question[currentQuestion].answer3);
                        n3 = false
                        n4 = true
                    }
                    else if (n4 == true) {
                        already[num] = num;
                        i++;
                        names.splice(num, 1, question[currentQuestion].answer4);
                    }
                }
            }
        }
        setOptions(names);
    };

    const itemShuffle = () => {
        const array = []
        array.push(...Items)
        let i = array.length - 1;

        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setQuestion(array);
    };

    const failedScreen = () => {
        return navigation.navigate('FailedScreen', { quiz: 3 });
    };

    const checkAnswer = (input) => {
        let lyf;
        if (input == question[currentQuestion].answer3) {
            setScore(score + 1);
        } else {
            setLife(life - 1);
        }
        if (currentQuestion === totalProblems) {
            return navigation.navigate('SuccessScreen', { quiz: 3 });
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    const renderImages = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.questionContainer1}>
                    <Text style={styles.question}>{question[currentQuestion].question}</Text>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        Guess the answer.
          </Text>
                    <Image source={require('../../assets/images/questionmark.gif')} style={styles.gifImg} />
                </View>
                <View style={styles.optionsBox}>
                    <View style={styles.individualOptions}>
                        <TouchableOpacity
                            onPress={() => {
                                checkAnswer(options[0]);
                            }}>
                            <Text style={styles.options}>{options[0]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.optionsBox}>
                    <View style={styles.individualOptions}>
                        <TouchableOpacity
                            onPress={() => {
                                checkAnswer(options[1]);
                            }}>
                            <Text style={styles.options}>{options[1]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.optionsBox}>
                    <View style={styles.individualOptions}>
                        <TouchableOpacity
                            onPress={() => {
                                checkAnswer(options[2]);
                            }}>
                            <Text style={styles.options}>{options[2]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.optionsBox}>
                    <View style={styles.individualOptions}>
                        <TouchableOpacity
                            onPress={() => {
                                checkAnswer(options[3]);
                            }}>
                            <Text style={styles.options}>{options[3]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/putinQuiz.jpg')}>
            <View style={styles.mainView}>
                <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
                <View style={styles.quizheader}>
                    <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
                        <BackIcon name="arrow-back" size={20} color='white' />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <LottieView
                            source={require('../../assets/animation/levels.json')}
                            autoPlay
                            loop
                            style={styles.animationHeader}
                        />
                        <LottieView
                            source={require('../../assets/animation/levels.json')}
                            autoPlay
                            loop
                            style={styles.animationHeader}
                        />
                        <LottieView
                            source={require('../../assets/animation/levels.json')}
                            autoPlay
                            loop
                            style={styles.animationHeader}
                        />
                    </View>
                </View>
                <View style={styles.scoreContainer}>
                    <View style={styles.individualScore1}>
                        <Text style={styles.scoreText}>{score}</Text>
                    </View>
                    <View style={styles.individualScore}>
                        <View style={styles.iconContainer}>{iconLoop()}</View>
                    </View>
                </View>
                <View style={styles.problemContainer}>
                    <Text style={styles.scoreText}>Question</Text>
                    <Text style={styles.scoreText}>
                        {currentQuestion} | {totalProblems}
                    </Text>
                </View>
                {loading ? renderImages() : null}
            </View>
        </ImageBackground>
    );
};

export default Quiz3;
