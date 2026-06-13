import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-flash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoFlash {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M194.82,496a18.36,18.36,0,0,1-18.1-21.53l0-0.11L204.83,320H96a16,16,0,0,1-12.44-26.06L302.73,23a18.45,18.45,0,0,1,32.8,13.71c0,0.3-0.080.59-0.130.89L307.19,192H416a16,16,0,0,1,12.44,26.06L209.24,489A18.45,18.45,0,0,1,194.82,496Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoFlash;
