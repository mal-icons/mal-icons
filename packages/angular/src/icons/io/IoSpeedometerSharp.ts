import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-speedometer-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoSpeedometerSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,48C123.46,48,16,156.55,16,290.56A243.3,243.3,0,0,0,76.32,451.43c1.18,1.3,2.25,2.6,3.43,3.79C89.2,464,92.07,464,99.57,464s12.43,0,19.93-8.88C152,416.64,202,400,256,400s104.07,16.71,136.5,55.12C400,464,404.82,464,412.43,464s11.3,0,19.82-8.78c1.22-1.25,2.25-2.49,3.43-3.79A243.3,243.3,0,0,0,496,290.56C496,156.55,388.54,48,256,48Zm-16,64h32v64H240ZM144,304H80V272h64Zm21.49-83.88-45.25-45.26,22.62-22.62,45.26,45.25ZM278.6,307.4a31,31,0,0,1-7,7,30.11,30.11,0,0,1-35-49L320,224Zm45.28-109.91,45.26-45.25,22.62,22.62-45.25,45.26ZM432,304H368V272h64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoSpeedometerSharp;
