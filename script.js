// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // First ensure image is centered
    forceImageCentering();
    
    // Add extra stars dynamically
    createExtraStars();
    
    // Make sure image borders are properly positioned
    ensureImageBorders();
    
    // Add QR code hover effect
    const qrCode = document.querySelector('.qr-code img');
    if (qrCode) {
        qrCode.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        qrCode.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add comic bubble with typing effect
    const comicBubble = document.querySelector('.comic-bubble');
    const typingText = document.querySelector('.typing-text');
    
    if (comicBubble && typingText) {
        // Set delay for showing the bubble after the image appears
        setTimeout(function() {
            // Show the bubble
            comicBubble.style.display = 'block';
            
            // Set up typing animation for multiline text
            const textLine1 = "HEHEHE";
            const textLine2 = "রাতারাতি বড়লোক হয়ে যাবো!";
            let currentLine = 1;
            let charIndex = 0;
            
            // Type one character at a time
            const typingInterval = setInterval(function() {
                // Handle first line
                if (currentLine === 1) {
                    if (charIndex < textLine1.length) {
                        typingText.innerHTML += textLine1.charAt(charIndex);
                        charIndex++;
                    } else {
                        // First line complete, add line break and move to second line
                        typingText.innerHTML += '<br>';
                        currentLine = 2;
                        charIndex = 0;
                    }
                } 
                // Handle second line
                else if (currentLine === 2) {
                    if (charIndex < textLine2.length) {
                        typingText.innerHTML += textLine2.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                        // Keep the bubble visible with blinking cursor
                    }
                }
            }, 150); // Time between each character
        }, 1500); // Wait for image animation to complete
    }
    
    // Add a scroll animation for instructions
    const instructions = document.querySelector('.instructions');
    if (instructions) {
        window.addEventListener('scroll', function() {
            const position = instructions.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (position < screenPosition) {
                instructions.style.opacity = '1';
                instructions.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Apply pop-up animation to content-left in desktop view
    const contentLeft = document.querySelector('.content-left');
    if (contentLeft && window.innerWidth > 576) {
        // Let CSS animation handle the pop-up effect
        contentLeft.style.animation = 'popUp 0.8s forwards';
    }
    
    // Check if it's a mobile device
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
});

// Function to force the image to be centered, especially on first page load
function forceImageCentering() {
    const isMobile = window.innerWidth <= 576;
    const isTablet = window.innerWidth <= 992 && window.innerWidth > 576;
    const personalImage = document.querySelector('.personal-image img');
    const personalImageContainer = document.querySelector('.personal-image');
    
    if (personalImage) {
        // Make sure image is fully visible and centered on first load
        personalImage.style.maxWidth = '100%';
        personalImage.style.objectFit = 'contain';
        personalImage.style.objectPosition = 'center';
        personalImage.style.right = '0';
        personalImage.style.left = '0';
        personalImage.style.marginLeft = 'auto';
        personalImage.style.marginRight = 'auto';
        personalImage.style.transform = 'translateX(0)';
        
        // Set height based on device
        if (isMobile || isTablet) {
            personalImage.style.maxHeight = isMobile ? '300px' : '400px';
        }
    }
    
    if (personalImageContainer) {
        // Ensure the container enables proper centering
        personalImageContainer.style.display = 'flex';
        personalImageContainer.style.justifyContent = 'center';
        personalImageContainer.style.width = '100%';
        personalImageContainer.style.maxWidth = '100%';
        personalImageContainer.style.overflow = 'visible';
        personalImageContainer.style.right = 'auto';
        personalImageContainer.style.left = 'auto';
    }
    
    // Prevent horizontal scrolling
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Run again after a short delay
    setTimeout(forceImageCentering, 100);
}

// Function to ensure image borders are properly positioned and visible
function ensureImageBorders() {
    const personalImage = document.querySelector('.personal-image');
    
    if (personalImage) {
        // Make sure the container has position relative for pseudo-elements
        personalImage.style.position = 'relative';
        personalImage.style.overflow = 'visible';
        
        // Force redraw of pseudo-elements by toggling a class
        personalImage.classList.add('force-border-redraw');
        setTimeout(() => {
            personalImage.classList.remove('force-border-redraw');
        }, 10);
    }
    
    // Run again after animations might have completed
    setTimeout(ensureImageBorders, 1000);
}

// Function to handle mobile view specific behaviors
function checkMobileView() {
    const isMobile = window.innerWidth <= 576;
    const isTablet = window.innerWidth <= 992 && window.innerWidth > 576;
    const isSmallTablet = window.innerWidth >= 768 && window.innerWidth <= 853;
    const contentLeft = document.querySelector('.content-left');
    const personalImage = document.querySelector('.personal-image img');
    const qrCode = document.querySelector('.qr-code');
    const bkashNumber = document.querySelector('.bkash-number');
    const instructions = document.querySelector('.instructions');
    const eidGreetingTop = document.querySelector('.eid-greeting-top');
    const personalImageContainer = document.querySelector('.personal-image');
    const comicBubble = document.querySelector('.comic-bubble');
    const contentRight = document.querySelector('.content-right');
    const main = document.querySelector('main');
    
    // Always ensure image is centered properly regardless of other logic
    if (personalImage) {
        // Force center positioning for the image regardless of device
        personalImage.style.objectPosition = 'center';
        personalImage.style.maxWidth = '100%';
        personalImage.style.objectFit = 'contain';
        personalImage.style.marginLeft = 'auto';
        personalImage.style.marginRight = 'auto';
        personalImage.style.right = '0';
        personalImage.style.left = '0';
        personalImage.style.transform = 'translateX(0)';
    }
    
    if (personalImageContainer) {
        // Ensure the container allows for proper centering
        personalImageContainer.style.display = 'flex';
        personalImageContainer.style.justifyContent = 'center';
        personalImageContainer.style.width = '100%';
        personalImageContainer.style.maxWidth = '100%';
        personalImageContainer.style.overflow = 'visible';
        personalImageContainer.style.right = 'auto';
        personalImageContainer.style.left = 'auto';
    }
    
    if (isMobile || isTablet) {  // Apply the same layout for both mobile and tablet
        // For mobile and tablet view with custom layout
        if (contentLeft && personalImage && qrCode && bkashNumber && instructions && eidGreetingTop && contentRight && main) {
            // Enable scrolling for mobile and tablet
            document.body.style.height = 'auto';
            document.body.style.overflowY = 'auto';
            
            // Ensure the main container preserves structure
            main.style.flexDirection = 'column';
            
            // Show content-left first with pop-up animation
            contentLeft.style.position = 'relative';
            contentLeft.style.zIndex = '3';
            contentLeft.style.opacity = '1';
            contentLeft.style.animation = 'popUp 0.8s forwards';
            contentLeft.style.maxHeight = 'none';
            contentLeft.style.marginBottom = '20px';
            
            // Handle content-right
            contentRight.style.minHeight = 'unset';
            contentRight.style.padding = '0';
            contentRight.style.marginBottom = '10px';
            
            // Create container for QR and image side by side if it doesn't exist
            let qrAndImageContainer = document.querySelector('.qr-and-image-container');
            if (!qrAndImageContainer) {
                // Remove existing elements from their current positions
                if (qrCode.parentNode) qrCode.parentNode.removeChild(qrCode);
                if (bkashNumber.parentNode) bkashNumber.parentNode.removeChild(bkashNumber);
                if (personalImageContainer.parentNode) personalImageContainer.parentNode.removeChild(personalImageContainer);
                
                // Move Eid greeting to content-right
                if (eidGreetingTop.parentNode) {
                    eidGreetingTop.parentNode.removeChild(eidGreetingTop);
                    contentRight.appendChild(eidGreetingTop);
                }
                
                // Set Eid greeting styles
                eidGreetingTop.style.display = 'block';
                eidGreetingTop.style.position = 'relative';
                eidGreetingTop.style.opacity = '1';
                eidGreetingTop.style.marginBottom = '10px';
                eidGreetingTop.style.marginTop = '10px';
                
                // Create new container structure
                qrAndImageContainer = document.createElement('div');
                qrAndImageContainer.className = 'qr-and-image-container';
                qrAndImageContainer.style.marginTop = '20px';
                qrAndImageContainer.style.marginBottom = '20px';
                qrAndImageContainer.style.alignItems = 'center';
                
                // Create left column for QR and number
                const qrAndNumber = document.createElement('div');
                qrAndNumber.className = 'qr-and-number';
                qrAndNumber.style.display = 'flex';
                qrAndNumber.style.flexDirection = 'column';
                qrAndNumber.style.alignItems = 'center';
                qrAndNumber.style.justifyContent = 'center';
                qrAndNumber.style.textAlign = 'center';
                qrAndNumber.style.margin = '0 auto';
                qrAndNumber.style.paddingTop = isTablet ? '25px' : '15px';  // More padding for tablet
                
                // Create right column for image and bubble
                const personalImageWrapper = document.createElement('div');
                personalImageWrapper.className = 'personal-image-container';
                
                // Append QR and bKash to left column
                qrAndNumber.appendChild(qrCode);
                qrAndNumber.appendChild(bkashNumber);
                
                // Append image to right column
                personalImageWrapper.appendChild(personalImageContainer);
                
                // Add columns to container
                qrAndImageContainer.appendChild(qrAndNumber);
                qrAndImageContainer.appendChild(personalImageWrapper);
                
                // Remove content-right from its current position and insert after content-left
                if (contentRight.parentNode) contentRight.parentNode.removeChild(contentRight);
                if (contentLeft.nextSibling) {
                    contentLeft.parentNode.insertBefore(contentRight, contentLeft.nextSibling);
                } else {
                    contentLeft.parentNode.appendChild(contentRight);
                }
                
                // Insert image container right after content-right
                if (contentRight.nextSibling) {
                    contentRight.parentNode.insertBefore(qrAndImageContainer, contentRight.nextSibling);
                } else {
                    contentRight.parentNode.appendChild(qrAndImageContainer);
                }
                
                // Add instructions at the end
                if (instructions.parentNode) instructions.parentNode.removeChild(instructions);
                if (qrAndImageContainer.nextSibling) {
                    qrAndImageContainer.parentNode.insertBefore(instructions, qrAndImageContainer.nextSibling);
                } else {
                    qrAndImageContainer.parentNode.appendChild(instructions);
                }
            }
            
            // Adjust image position specifically for mobile/tablet
            if (personalImage) {
                personalImage.style.maxHeight = isTablet ? '400px' : '300px';
                // Make sure image is fully visible and centered
                personalImage.style.objectPosition = 'center';
                personalImage.style.right = '0';
                personalImage.style.left = '0';
            }
            
            // Ensure image container enables proper centering
            if (personalImageContainer) {
                personalImageContainer.style.position = 'relative';
                personalImageContainer.style.display = 'flex';
                personalImageContainer.style.justifyContent = 'center';
                personalImageContainer.style.alignItems = 'center';
                personalImageContainer.style.width = '100%';
                personalImageContainer.style.maxWidth = '100%';
            }
            
            // Adjust comic bubble position to match centered image
            if (comicBubble) {
                comicBubble.style.display = 'block';
                comicBubble.style.top = isTablet ? '10%' : '5%';
                comicBubble.style.right = isTablet ? '30%' : '25%';
                comicBubble.style.zIndex = '15';
            }
            
            // Set QR code and bKash size based on device
            if (qrCode && qrCode.querySelector('img')) {
                qrCode.querySelector('img').style.maxWidth = isTablet ? '180px' : '130px';
            }
            
            if (bkashNumber && bkashNumber.querySelector('p')) {
                bkashNumber.querySelector('p').style.fontSize = isTablet ? '1.1rem' : '1rem';
            }
            
            // Set other elements to appear normally
            qrCode.style.position = 'relative';
            qrCode.style.opacity = '1';
            qrCode.style.margin = isTablet ? '15px 0' : '10px 0';
            
            bkashNumber.style.position = 'relative';
            bkashNumber.style.opacity = '1';
            bkashNumber.style.margin = isTablet ? '15px 0 25px 0' : '10px 0';
            
            instructions.style.position = 'relative';
            instructions.style.opacity = '1';
            instructions.style.clear = 'both';
            instructions.style.width = '100%';
            instructions.style.backgroundColor = 'var(--white)';
            instructions.style.borderRadius = '20px';
            instructions.style.boxShadow = '0 4px 15px rgba(255, 102, 153, 0.1)';
            instructions.style.marginTop = isTablet ? '25px' : '5px';
            instructions.style.padding = isTablet ? '20px' : '15px';
            
            // Reset any unwanted transitions or animations
            personalImageContainer.style.opacity = '1';
            personalImageContainer.style.transform = 'none';
            personalImageContainer.style.transition = 'none';
            personalImage.style.animation = 'none';
            personalImage.style.opacity = '1';
        }
    } else {
        // Reset mobile-specific styles for desktop
        document.body.style.height = 'auto';
        document.body.style.overflowY = 'auto';
        
        // For desktop, ensure image extends to container edge
        if (personalImageContainer && personalImage) {
            personalImageContainer.style.width = 'calc(100% + 20px)';
            personalImageContainer.style.marginRight = '-20px';
            personalImage.style.right = '0';
        }
        
        // Apply pop-up animation to content-left
        if (contentLeft) {
            contentLeft.style.animation = 'popUp 0.8s forwards';
        }
        
        // Adjust comic bubble for desktop if it's showing
        if (comicBubble && (comicBubble.style.display === 'block' || getComputedStyle(comicBubble).display === 'block')) {
            comicBubble.style.top = '15%';
            comicBubble.style.right = '25%';
        }
        
        // Other desktop view setup
        setupDesktopView(contentLeft, personalImage, qrCode, bkashNumber, instructions, eidGreetingTop);
    }
    
    // Ensure borders are correctly positioned after layout changes
    ensureImageBorders();
    
    // Adjust vertical border for mobile if it exists as a DOM element
    const verticalBorder = document.querySelector('.vertical-border');
    if (verticalBorder) {
        verticalBorder.style.width = '3px'; // Thinner line (was 7px)
        verticalBorder.style.bottom = '0'; // Start from bottom instead of top
        verticalBorder.style.top = 'auto';
        verticalBorder.style.animation = 'fadeIn 1.5s forwards'; // Match image animation
        verticalBorder.style.opacity = '0'; // Start invisible
        
        if (window.innerWidth <= 768) {
            verticalBorder.style.height = '85%'; // Match the height from CSS
        }
    }
}

// Helper function for desktop and tablet view setup
function setupDesktopView(contentLeft, personalImage, qrCode, bkashNumber, instructions, eidGreetingTop) {
    if (contentLeft && personalImage && qrCode && bkashNumber && instructions && eidGreetingTop) {
        // Reset mobile-specific styles
        contentLeft.style.position = 'relative';
        contentLeft.style.top = 'auto';
        contentLeft.style.left = 'auto';
        contentLeft.style.right = 'auto';
        // Keep animation set elsewhere
        contentLeft.style.maxHeight = 'none';
        contentLeft.style.overflowY = 'visible';
        
        personalImage.style.display = 'block';
        personalImage.style.animation = 'fadeIn 1.5s forwards';
        personalImage.style.zIndex = 'auto';
        
        eidGreetingTop.style.display = 'block';
        eidGreetingTop.style.position = 'relative';
        eidGreetingTop.style.animation = 'fadeIn 1.5s forwards';
        eidGreetingTop.style.zIndex = 'auto';
        
        qrCode.style.opacity = '1';
        qrCode.style.animation = 'none';
        
        bkashNumber.style.opacity = '1';
        bkashNumber.style.animation = 'none';
        
        instructions.style.opacity = '1';
        instructions.style.animation = 'none';
    }
}

// Separate the scroll handler function
function handleScroll() {
    const instructions = document.querySelector('.instructions');
    
    if (instructions) {
        const position = instructions.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            instructions.style.opacity = '1';
            instructions.style.transform = 'translateY(0)';
        }
    }
}

// Attach the scroll handler
window.addEventListener('scroll', handleScroll);

// Function to create additional stars in the header
function createExtraStars() {
    const header = document.querySelector('header');
    const moonStars = document.querySelector('.moon-stars');
    
    if (header && moonStars) {
        for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 10 + 5 + 'px';
            star.style.height = star.style.width;
            star.style.top = Math.random() * header.offsetHeight + 'px';
            star.style.left = Math.random() * header.offsetWidth + 'px';
            star.style.animationDelay = Math.random() * 5 + 's';
            moonStars.appendChild(star);
        }
    }
}

// Add CSS class on scroll for fade-in effect
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.eid-greeting');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            element.classList.add('fade-in');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Function to restore original layout when device is no longer in mobile view
function restoreOriginalLayout() {
    const contentRight = document.querySelector('.content-right');
    const contentLeft = document.querySelector('.content-left');
    const qrAndImageContainer = document.querySelector('.qr-and-image-container');
    const eidGreetingTop = document.querySelector('.eid-greeting-top');
    const main = document.querySelector('main');
    
    // Reset main container flex direction for tablet/desktop
    if (main) {
        if (window.innerWidth > 992) {
            main.style.flexDirection = 'row';
        } else {
            main.style.flexDirection = 'column';
        }
    }
    
    // Reset content right styles that might have been set for tablet
    if (contentRight) {
        if (window.innerWidth > 992) {
            contentRight.style.rowGap = '';
        }
    }
    
    // Reset QR code and bKash number styles that might have been set for tablet
    const qrCode = document.querySelector('.qr-code');
    const bkashNumber = document.querySelector('.bkash-number');
    
    if (qrCode && window.innerWidth > 991) {
        qrCode.style.margin = '';
        qrCode.style.textAlign = '';
        if (qrCode.querySelector('img')) {
            qrCode.querySelector('img').style.maxWidth = '';
        }
    }
    
    if (bkashNumber && window.innerWidth > 991) {
        bkashNumber.style.margin = '';
        bkashNumber.style.textAlign = '';
        if (bkashNumber.querySelector('p')) {
            bkashNumber.querySelector('p').style.fontSize = '';
        }
    }
    
    // Only proceed if mobile layout elements exist
    if ((qrAndImageContainer || eidGreetingTop) && contentRight && contentLeft) {
        // Get all elements that need to be restored
        const personalImageContainer = document.querySelector('.personal-image');
        const instructions = document.querySelector('.instructions');
        
        // Restore the original DOM structure
        if (main && contentLeft && contentRight) {
            // First put content-left and content-right back in main
            if (contentLeft.parentNode) contentLeft.parentNode.removeChild(contentLeft);
            if (contentRight.parentNode) contentRight.parentNode.removeChild(contentRight);
            
            main.appendChild(contentLeft);
            main.appendChild(contentRight);
            
            // Remove elements from their current positions
            if (eidGreetingTop && eidGreetingTop.parentNode) eidGreetingTop.parentNode.removeChild(eidGreetingTop);
            if (qrCode && qrCode.parentNode) qrCode.parentNode.removeChild(qrCode);
            if (bkashNumber && bkashNumber.parentNode) bkashNumber.parentNode.removeChild(bkashNumber);
            if (personalImageContainer && personalImageContainer.parentNode) personalImageContainer.parentNode.removeChild(personalImageContainer);
            if (instructions && instructions.parentNode) instructions.parentNode.removeChild(instructions);
            
            // Append elements back in their original order to content-right
            contentRight.appendChild(eidGreetingTop);
            contentRight.appendChild(personalImageContainer);
            contentRight.appendChild(qrCode);
            contentRight.appendChild(bkashNumber);
            contentRight.appendChild(instructions);
            
            // Reset eid greeting styles
            if (eidGreetingTop) {
                eidGreetingTop.style.marginBottom = '20px';
                eidGreetingTop.style.marginTop = '0';
                eidGreetingTop.style.order = '';
            }
            
            // Remove the temporary container if it exists
            if (qrAndImageContainer && qrAndImageContainer.parentNode) {
                qrAndImageContainer.parentNode.removeChild(qrAndImageContainer);
            }
        }
    }
}

// Add additional event listeners to ensure borders stay visible
window.addEventListener('resize', ensureImageBorders);
window.addEventListener('scroll', ensureImageBorders);
// Run the function periodically to ensure borders are always visible
setInterval(ensureImageBorders, 2000);

// Check for any direct DOM elements that might have been created
if (window.innerWidth <= 768) {
    if (verticalBorder) {
        verticalBorder.style.height = '85%';
        verticalBorder.style.width = '3px'; // Thinner line (was 7px)
        verticalBorder.style.bottom = '0'; // Start from bottom
        verticalBorder.style.top = 'auto';
    }
    
    // ... existing code ...
} 