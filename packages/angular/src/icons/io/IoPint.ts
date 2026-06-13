import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-pint",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoPint {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M399,99.29c-0.15-2.13-0.3-4.35-0.44-6.68L395.69,46a32,32,0,0,0-31.91-30H148.21A32,32,0,0,0,116.3,46l-2.91,46.63c-0.14,2.31-0.29,4.51-0.43,6.62-1.29,19.24-2.23,33.14,3.73,65.66,1.67,9.11,5.22,22.66,9.73,39.82,12.61,48,33.71,128.36,33.71,195.63V472a24,24,0,0,0,24,24H327.87a24,24,0,0,0,24-24V400.38c0-77.09,21.31-153.29,34-198.81,4.38-15.63,7.83-28,9.41-36.62C401.27,132.44,400.33,118.53,399,99.29ZM364,51.75l1.5,24a4,4,0,0,1-4,4.25h-211a4,4,0,0,1-4-4.25l1.48-24A4,4,0,0,1,152,48H360A4,4,0,0,1,364,51.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoPint;
