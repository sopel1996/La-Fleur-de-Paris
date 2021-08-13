$(function () {

    (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus");
        var $quantityArrowPlus = $(".quantity-arrow-plus");
        var $quantityNum = $(".quantity-num");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus(evt) {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
            evt.preventDefault();
        }

        function quantityPlus(evt) {
            $quantityNum.val(+$quantityNum.val() + 1);
            evt.preventDefault();
        }
    })();

});