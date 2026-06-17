import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-battery-0",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBattery0 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M201 16c-15 0-20 3.38-20 20v15h-45c-29.55 0-35 5.45-35 35v375c0 29.55 5.45 35 35 35h240c29.55 0 35-5.45 35-35V86c0-29.55-5.45-35-35-35h-45V36c0-16.62-5-20-20-20zm-65 105c0-40-5-35 35-35h170c40 0 35-5 35 35v305c0 40 5 35-35 35H171c-40 0-35 5-35-35V121z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBattery0;
