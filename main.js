(function(){
    'use strict';

    var vm = new Vue({
        el: "#app",
        data: {
            skin_color: '#f4cc7a',
            hair_style: 'hair1',
            hair_styles: ['none', 'hair1', 'hair2'],
            hair_color: '#202020',
            eyebrow_color: '#202020',
            eye_style: 'eye1',
            eye_styles: ['eye1', 'eye2'],
            eye_size: '10',
            eye_color_right: '#202020',
            eye_color_left: '#202020',
            mouth_style: 'mouth1',
            mouth_styles: ['mouth1', 'mouth2']
        },
        methods: {
            whiteEye: function() {
                return this.eye_size * 2;
            }
        }

    });

})();