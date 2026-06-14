import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-blitzjs-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBlitzjsIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M204 300c37.8 0 73.3 17.7 96 47.8l97.9 130a8 8 0 0 1 0.7 8.6l-56.4 109.3a8 8 0 0 1-13.5 1.1L104.8 300zM271.3 3.1 495.2 300H396a120 120 0 0 1-96-48l-97.9-130a8 8 0 0 1-0.7-8.5L257.8 4.3a8 8 0 0 1 13.5-1.1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBlitzjsIcon;
