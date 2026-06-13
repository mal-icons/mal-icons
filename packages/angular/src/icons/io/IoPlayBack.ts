import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-play-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoPlayBack {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M30.71,229.47l188.87-113a30.54,30.54,0,0,1,31.09-0.39,33.74,33.74,0,0,1,16.76,29.47V224.6L448.15,116.44a30.54,30.54,0,0,1,31.09-0.39A33.74,33.74,0,0,1,496,145.52v221A33.73,33.73,0,0,1,479.24,396a30.54,30.54,0,0,1-31.09-0.39L267.43,287.4v79.08A33.73,33.73,0,0,1,250.67,396a30.54,30.54,0,0,1-31.09-0.39l-188.87-113a31.27,31.27,0,0,1,0-53Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoPlayBack;
