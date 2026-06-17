import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-grenade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiGrenade2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-96 0-120 48.19-120 72.19v71.72c0 13.3 10.61 23.91 23.91 23.91h23.91v144.38h-23.91c-13.3 0-23.91 10.61-23.91 23.91v71.72c0 24 24 72.19 120 72.19s120-48.19 120-72.19v-71.72c0-13.3-10.61-23.91-23.91-23.91h-23.91V183.81h23.91c13.3 0 23.91-10.61 23.91-23.91V88.19C376 64.19 352 16 256 16zm-23.91 167.81h47.81v144.38h-47.81V183.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiGrenade2;
