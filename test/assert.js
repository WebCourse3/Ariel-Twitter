(function() {
    test_group = (name, test_group_function) => {

        let passed = true;
        let testGroupDiv = document.createElement('div');
        testGroupDiv.innerHTML += `<h3>${name}</h3>`
        testGroupDiv.setAttribute('class', 'test-group alert-container');

        assert = (value, name) => {
            passed = passed && value;
            let style = value ? 'green-alert' : 'red-alert';
            const div = 
            `<div class="alert ${style}">
                ${name}
            </div`;  
            testGroupDiv.innerHTML += div;
        }

        document.querySelector('.test-groups').appendChild(testGroupDiv);
        test_group_function();
        testGroupDiv.className += passed ? ' green-alert' : ' red-alert';
    }

    test_group('test group 1', () => {
        assert(true, 'test 1');
        assert(true, 'test 2');
        assert(true, 'test 3');
    });

    test_group('test group 2', () => {
        assert(true, 'test 1');
        assert(false, 'test 2');
        assert(true, 'test 3');
    });
})();