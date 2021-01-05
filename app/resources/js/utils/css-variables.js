let windowWidth = window.innerWidth;

export default {
    colorPrimary: '#E74023',
    colorSecondary: '#E8DAC0',
    headerHeightMobile: 72,
    headerHeightTablet: 82,
    tabletBreakpoint: 769,
    desktopBreakpoint: 1001,
    desktopWideBreakpoint: 1441,
    zIndexAboveContent: 4, // currently used for bar animation
    expanderTransitionTime: 320, // ms
    headerAnimationDelay: 200, // ms
    globalNotificationHeight: 44, // in px
    innerGutterMobile: 24,
    innerGutterTablet: 32,
    innerGutterDesktop: 40,
    innerGutterDesktopWide: 54,

    outerGutterTablet: windowWidth * 0.08,
    outerGutterDesktop: windowWidth * 0.12,
    outerGutterDesktopWide: windowWidth * 0.18,
    notificationAnimationLength: 320
}
