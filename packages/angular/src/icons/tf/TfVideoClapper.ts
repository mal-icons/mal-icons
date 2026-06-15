import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-video-clapper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfVideoClapper {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1v15h17v-15h-17zM16 4h-0.27l-2.36-2h2.62v2zM8.74 7l2.36-2h2.92l-2.36 2h-2.92zM6.8 4l-2.36-2h2.92l2.36 2h-2.92zM9.55 5l-2.36 2h-2.92l2.36-2h2.92zM11.27 4l-2.36-2h2.92l2.36 2h-2.92zM1 2h1.9l2.36 2h-4.26v-2zM1 5h4.09l-2.36 2h-1.73v-2zM16 15h-15v-7h15v7zM16 7h-2.79l2.36-2h0.44v2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfVideoClapper;
