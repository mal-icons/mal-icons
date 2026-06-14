import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-forked-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedForked16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM6 6.93a1.75 1.75 0 1 0-1 0V7.5A1.5 1.5 0 0 0 6.5 9h1v1.07a1.75 1.75 0 1 0 1 0V9h1A1.5 1.5 0 0 0 11 7.5v-0.57a1.75 1.75 0 1 0-1 0V7.5a0.50.5 0 0 1-0.50.5h-3a0.50.5 0 0 1-0.5-0.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedForked16;
