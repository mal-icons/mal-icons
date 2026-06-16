import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-swipe-up-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSwipeUpAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-160q-82 0-141-59t-59-141q0-82 50.5-133.5T450-559v-207l-89 89-42-42 161-161 161 161-42 42-89-89v207q69 14 119.5 65.5T680-360q0 82-58 141t-142 59Zm0-60q59 0 99.5-41.5T620-360q0-59-40.5-99.5T480-500q-57 0-98.5 40.5T340-360q0 57 41.5 98.5T480-220Zm0-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSwipeUpAlt;
