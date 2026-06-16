import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-subdirectory-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSubdirectoryArrowLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m5.71 15.71 4.58 4.58c0.390.39 1.030.39 1.42 0 0.39-0.390.39-1.03 0-1.42L8.83 16H19c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v9H8.83l2.88-2.87c0.39-0.390.39-1.03 0-1.42-0.39-0.39-1.03-0.39-1.42 0l-4.58 4.58c-0.390.39-0.39 1.03 0 1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSubdirectoryArrowLeft;
