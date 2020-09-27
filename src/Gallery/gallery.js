import React from 'react';
import './gallery.css';

const galleryImg = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUWFRUVFRcVFRUVFRcVFxUWFxcVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS03Lf/AABEIAOQA3QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAEDBQYCB//EADUQAAEDAwMCBAUDBAIDAQAAAAEAAhEDBCEFEjFBUQYiYXETgZGhsTLB0RQjQvBy8RZS4Qf/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQACAgMBAAIDAAMAAAAAAAAAAQIRAyExEhNBBDJRIkJh/9oADAMBAAIRAxEAPwD0wJikkoFxJBJILGHTpk4QMOnCZOETDhOmCdEAk4KZJEx2F0CownlEFEkpLgFdSsA6SXMp0THUpSmSWAOnXKSxjpJNKUomHSSSWMJJJJYAAkkkpFRJJk6xh04KaUxKATouSDkNdVYGfr+xVA3X9ri09Dg+nZTllUelI43LhqWPBXayTdch8g+/qtNa3baglpCOPKpgyYpRJ0kkgqkh06SSxhJSkkmAPKeVyksA7lOo3VAOShBqDSYBwg5JdGUWw+UlHTfK7lMLR0kmTysASSSSJhJ5TJLGAkkydSKDJ0ySxhwuXJnlB3FyW9lOc0ikYtkOpVCAY+nQrz2+vAXkcGVote1eBx9JXn1/eS4unK4pv2zuxR8rZY/1pLoBWq0es7HI9lkNDoGo+YHPZbWgyPL06pWqGk7Re09ScBEynfqj/RVrIATOT/JL+kvjj/A8a+5vIBH0KKZ4ipRmQe0LK3juyr21DMeqZZ5oHwRZtqniIf4t+q4PiGOWhZi2aXfhTVEj/Jyf0PwQNAfEg/8AX7oW48QvPGFRVB9UO+v0n7oPPN/YVhgvot3373fqdj3yVxT1CCqCtcHoVD/VnkIW3sp5Ru6GvRgq7tLsOEyF5XQrOcYmPytbpFwGgZV8edp7OfLhVaNo1y6lAWtwCEY1y7oyTOKUaJExckSoHuTiE+9NuQ+9LesYjSSSUigkxTlDV7kNSyaS2NFNndY4VJf1onKe81L1VFqN4SFxZZpnXjg0UWvXMyP5/CzbaW54bySff7BEajWJeZOArDwtayTUI5/T/K0FSLyZpNMtRTZwJRnx4CjDT8kPcB3DQUkhYkrbsknb0U1C6nB5CFtKDgDjourO3IJe7rwEqi7C2hXFT9vyhmM834UlU5T02GQP95QYy4F2zT8kQKeOM/7lDNqZ+Sa5u4Hyn8rJCse5YB1Eqqu2gZn7f7K6rX0gkY9SgWVt+Pv0WoZCrvDhyqptWHbSfuUbcUy1VWoN/wAhz+VSH8FkWNG62n9IPzK0mm38xKxVGtuHEEK90ytjlCUaNdo3llcdiry1rSsHaXu0rQWN52KviyUc2XHZpy5QPK4t7iRlO4ruTtaONqhJJpXQRAclyiqXDQorqsAFm9Svz0K5MmXzw6seL0Wt7rAGAFRXmqdzCo7m9dPJQ9N0kF2c4HquaU5S6dUccYlxTcXeY8dAg9WuQ1p6e6OaMZWJ8V3hc/YDgFTjG5UP9WDVqwcQB/keTyc8x2W60q1hrRxAyshoFrvrNn/ESfTsFvnua1nZXelSJt7BNT1EUmkgDHfj3Kzf/klVxBJftmAQGtGe27J4V7faeHspuqDyF4Lh3kPLQfTyhZzxDUoAjb/Ub5Y142D4Za79WzbBEcbSTPdXw4E9sjmz+dI2mlXctBOcZxGfX6rqpXBkBU3hR5bbxU5P6ZxgSPyEeKW4469Vz5tSpFsX+UbZyWCfTgfulSHmx6BFmhAgAQFwKHX7LmZXRFUGJ9EK+sCM+v1RV0AAQqW4aeQfceiZGoe72QA7AnPsFWnxPSadrGDaMAzB/EfdLWmbmsAP6jBJMAerj0Cz1YBry0GmfOWHZBg0/KSCZO10zzBI9AF24sKnHZy5s3iVI2lO5bVb1HvyPmqy8oRg5UVt/ZBiSxzQ5vp3HthGNqio3K55w8PReEvSKKm6HQMHorjSbmTDhzyqq+bteD0OFzRu9tQTwU7XpAWma91QNjmPsjrS6LTzIVYW76eFV2185jtp46fwpJWFnpenX0q8pOkLAaRfie3otrp1QELrwTfDkzQDti6DFI1dQus5DF63qBadoElZy6uDy4/JW+vsIdMcrKajUJkAx3PZeRO3I9fGl5Bry+gwMnoAitNkEFx83bsqai7zQwZP+R/KtbNnb5nuU3EF7Lz408dljNUoH4rnFaii7MfX2VT4gp4J7pU6YUtEXhCtJeY6j6ALWWx+I6DwMn1PZY/wRbOe6oB3W5t6Hwh6de8q0ukVwKvW7qbmHhwjHIgyCPUFUx0kPI3ndnJjaD8lfMeHNASeNoWc5A8xfUV/9OHEACGtwABGO0KxtrcN6JWlP0RIZ1dhIxrGrU8YCAqMKOcff6KFzRCm4yf0OtFdVp7h0VHf2sHErQVqZ5Cr7+mSEEGyip0QQ5rpMiGntkH9lVN0GHk4OfY/Xsr2hkweVNVIHIVo5JR0JOEZdBqdABh3xJEbRkR0z9T81WVW/DMA4PCtKlVscKvuW7gi5WZJLhW6m6Wz1CDrCYP1/YqwuqJ25QNJsxCaL0BraNfob5pwVS63RLX7h3yrTRRtYZQOrnofqpx6NII0q73AZyFr9F1hzYHI7LzOzrljvmtNZ3U+/Qou4u0BpSVM9csbsPEotZvws5xYCVpAvQxy9Rs87JGnRkvEdDykrz/UOo+y9J8Tj+yV53dQGyPX7dVwZlUjvwP/ABKmAzH+R59B2Cs7U4wICpabS5/uVd246JGWCKZjPdC623y/JTAy4Dsm1gTS+SUxJ/8An1MCm93dxWtq5BhY/wAB1/JUaBw/85wtYKsKzeyBBRBwIg/lF1skN5XVJobk8qO3PmJSowdSgY7flENaBycodmBKxvjrWalNk037M84+y6cUElYOs21eoAhataAs/pepPqWtOo+Q5zcziSMTHqqvxnrD6NLyHJIE8x6qrijKRpKrgTI5QtaqI9+R2KoPDl7UfSD3OBJ6qzrPnK5c2NVZRMDvgWukfZRV60tn6om58zfZAUX8tPHVc4wKXlTsZgKWpbAZ5C5NToiYg1Cl5CVRaaJMev7rRXP6T6jqqLQ2+cjsU8f1Yr6jQ1HbWR1VXdncCjNXqQflCBpnCKWjAQE/gq40amd4b6qpAh0LS+FqU1mA90XvRm6R6loVrsYI7K2AUNsyGgKYLviqVHmSdsotep7qLh6FecX1P+39l6heslhCwmoW/lIhcX5HUzu/HeqMjaNzgK1pNhRilt4Cma1c92dVDtautUZ/Z+q6DV3et3U/YrIDM/4UvNlZ9M4Bgyt7QMxC8munmncA+35Xoei3u7aO4AV5rjOdfZo6oESoafGPRdlv/XH3RAp44S0GziqSG5GOypn6LbvPxKg3EHh0uj2lXtQYWfv6haTtXRjlRkQ61WEbWYaBAAQmrW7Hja4SEFd3BAduHspHVXEk7ZGecfZUbsOkBWuliiPI9zQcloOPoVZ0DDepHqhmU3OdudAHEdkYIhc+V2MqI2Ok+hUD6Of46j2RIZnCiuKRwRz1C5w2S0mSMFAXDMlM6+2mD/v8papW8rXd8YRpmsHuX9EDoY/vH/kVxUuD1U+gszu9yqJaYrZ1q7/7h91xQKiuqm58qSh2WCjmvTzK1HhATXYs7UpkrU+DgBWYSsntAl+rPV6YwulzTOE69E8wBe2VmdYs4MgYctQoLigHDK58kPSL45+Wed39rBQbQVoNYsyCcYVSKS89xpnoRlaOWNTlvkeTxkroNyEFr138Nmwcnn+E0Y2xZMxOqias9lqvCpMscTGeT2HMDqZ/3hZllEud6k/ur/TqkOicbgxv/Fvp64K6J8JJHoIqgODZifr9e6Lc5Z7XLjYWPE5IiO5gAf72VnRuw8DOeD7pTVqwgkwVV1qUuz3j0Rta5DfZZLXfErKXeeypFWDgXcBjSCYg5HpzzPYgfJcB4cJkH2zJwF5trGvVax/UQM8f72Umka/UpDbMtjA+n7K/h0S+ZWehkQOf+lCXkHCrbfWm1OucSPlKMa8Erlmjoj/Qum4qcxtk/VBB8ZnhA6hqmQ1vEGflyP3+vZJGNhBtQp/EO5mYOY5+Y+XKi1WpDGM6jJ9J6KbRGxuce+PrhB6kdxLoyeR6dCE32Yr7ipj3VraHbSJ6lUNV3nA9VcOdgN6QmkqSETtkbOUbRah6TEVTUmVQXRZK03hS1DqwxMLO2jV6P4Q0zYzc7ko4o+pCZp1E0tIYXaQSXpHmgiYpk4UyhBc2rXiCMLP3vh4kksMD1WoShTljjLo8cjjwxbNDqgEmB2KyWsaedxBMmV65XbgrB+IqfmwozgocL48jk9mMp2u1w9wiLJu17XO4Dz8/0q0daACeXdOw/lDf0WS58kAz/ASlDR37G1GgcwQ4fJRVmfCLyTkxEccCBCFsapLs+wRXiKdgcB/iJ+WFTE+oKVtIh1Si80WPa4OLmkkdjJA9+CvP9V0yq5xc8fwvRrPFvTBHmcN5x0dkD7qrv2j6rqjCKJyTemebOsDnHCkp6W7GFqK9u2HdyIHzKtbu2aDEdAqVoj8ezGULF7TIwVoNO+I6AYEkfTM/ZGPtEZpUMducMCSe3BUppMqk4rRQeJZZVpsa47C0l2esiJ+6elRkknADQB78D7Sq+8eatSBmSYno2TA+6tTDWhnYZ91CTSRWMaWzunU2w3tkqvvLkPfjgAqC5uzJhCMPKko/YGyK7GZVvp1w2oAJh3Ed1XlshCObBkYIVKUlRO2mac0yFPSpEmAFWWN45wAcZWq0N/mEgFQcXdFfSqy78M6AS4PeMcwvQqNMAYQGktG0YhWgC7cUFFHDlm5PYydPCSqSAE4TwkplBJ0guggYiqDCyPiOzDZcTlbMhZLxXSdCll/Urh6ZGzeS+JVvc0QRjjlUrGw6PqrajWDhn5Lnizpkt2BnBmFcUWitSIPt8iq65oqW0uPg5P6esJ4OpBTLG4AjHQQPQBUd2391c16giR1gj2IkKurNBJXcP5M/d0sAd3N/IV1VpA/RB1qXnYOm5v5R1ZsIpi+dkZaDhQ1qY2uaf/U/gqamobuu1gLnGABkpJDeaRTWlg1g+IZnnPdA3lbnueVNd6sKk7QQ0cTifX2VW985XLLbFcrI3LsM4TGFNTasTFthAubJRV1UUdBhKN0ZKye0wQtZpVQYKzVKieyubJ5aFGbKKKPVvDuoNe0Dqr/cvLfDt+W1BnBXolGvIBXZhn6icOaHmQduS3IT4iW9WIkXxE3xED8VN8QqRWg8VE/xUBvT7kDUHfEVPr7NzEWCuK1PcIQkrVBi6Z59Wt4JSs5Dsq91a1AVK5sFcNOLO5P0i3dSBz0CjNKQRC7tnS2B0T7O6t/0lzRwKUUmx0EH26IJzuqPo1A2W89vWeQq+7jpwSfl7joV045Wjqg/SoiEOePQz9BKldJPyXOmUtzyB2/KKrU9js9OPZV+gf7UQ0qPP1VVqtJtRrgTgA49UXfXeNreT9u6ra4hscrnyzS0GelRna7IwFCEfcUihNmVFMgxUqcqd4gKalQwoLg8hEXoEWyVZ2lAQhrWn6SrNgAEpZMeKo5PlwiKT8IC5uhuEcIplYEYU5IZbDrSsQZXpXhy9+IwdwvKhUIW58E3Y4Kp+PKpUS/IjcbNvCUJwUl6B55VfDThi6hOpFhtqcNTpwgAcNTkJBdIgKLU6Eys/cUwtbqLcLO1KfmXJkWzrxy0LTVLdnK4peQFxQrLj4js4H3WjyjS7ZzVHblSVKQePNg9SOvuOqMbTaBgKCqB/vKZaMptbRW0bV7H7mVAc9o/BSuS98FzjH/1HMAGUJc1RMDsn9y5ZT5pdAmPbJaPY+y5r0uVzZU/MfdGXFOIKk0L6M/cM+yjbaTlH3VDzz0KkeyBCKQGwM0YCrK7ZKuqgJb6hVtVmVmzRRHZs9FZkAMMqG2o5XWriG46pFtjvhnKmHET1VhbOwEEBuPqrC1bCafDQ0HsGFa6Tcmm4EFUhajbIlR5serPU9E1IVGjKtpXm+j3hpvGcFegW1cOaCvQw5PaPPzY/LBk6aUkRR04TJLGOwuguF0sYEvm4VTVpDlXVyJCq6zeihkWy2N6KrWR5FR0TBWk1Gn5VRfCkqLWy8XoLpXJIjhSwoG4wAuy5MKRXFY8BCFvdEOGZSczEoBB7KnnjkyrO8oyFzp1CTKIuj5XfRVS0Tb2UFRslOacqN9WHR3VnbUZgoBAK1CPmq6ra5WiuqXlVfswT2SMeLA2jblVmr3ExCs9QdAHqJCzdSSSskNY9IAq1tA2OFXUKaNZhJJjosGhp4UzBHAUNAiOFKXBTCTsetHpGs7WQTwsoKnmU7ieieE3FiSipLZ6Ukkku84BpT7kklgjbk+5JJYxHVdhAlJJRn0tDgNeNwqosEpJKb6URy8Iaq4ykkgEjceEQ/gBOksAPp4ZhD3B8seidJOIjOai3BPUHCtNHqE05KSSwWGHgoJo/UPRJJIx0ZzUnktjtMKmYUkkfoZFhahWDKYSSUmMSPZAELkOSSQMdP6IxnCSS0go/9k=',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxL5QtpvnUtBaMKw7FN0k4wslIkPW50eGQnQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpg2whs_hG7nQK0WzVkfoW-S0odw31TAnVZg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR87u7-qbsGzu7FDfFqwY-U5RqcwFrbTRcm9Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmN2CWLGIFVlzzUImmhmoTolIVDIJp5iyaoA&usqp=CAU'
]

const Gallery = () => {
    return (
        <div>
            <h1 className="gallery_title">Gallery</h1>
            <div className="gallery_wrap">
                {galleryImg.map(img => (
                    <div className="gallery_img" style={{ backgroundImage:`url(${img})` }}></div>
                    // <img src={img} className="gallery_img" />
                    ))}
            </div>
        </div>
    )
}



export default Gallery;