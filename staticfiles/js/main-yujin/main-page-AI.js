$(".Tooltip_symbol").on('mouseover', function(e) {
    var selectedTooltip = $(this).find($(".Tooltip_tooltip"))
    selectedTooltip.addClass("Tooltip_tooltip_Active")
    // selectedMessageBox.css('color', 'white')
    var selectedMessageBox = $(this).next($(".Tooltip_messagebox"))
    selectedMessageBox.addClass("Tooltip_show")
    selectedMessageBox.css('display', 'block')
    selectedMessageBox.css('opacity', '1')
})

$(".Tooltip_symbol").on('mouseout', function(e) {
    var selectedTooltip = $(this).find($(".Tooltip_tooltip"))
    selectedTooltip.removeClass("Tooltip_tooltip_Active")
    var selectedMessageBox = $(this).next($(".Tooltip_messagebox"))
    selectedMessageBox.removeClass("Tooltip_show")
    selectedMessageBox.css('display', 'none')
    selectedMessageBox.css('opacity', '0')
})




