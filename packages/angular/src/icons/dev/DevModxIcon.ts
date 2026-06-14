import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-modx-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevModxIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M589.5 57.7H299.1l-40.2 63 210 129.4z"}],["path",{"fill":"currentColor","d":"M258.9 120.7 64.7 0v290.4l68.2 38.5L468.8 250z"}],["path",{"fill":"currentColor","d":"m531.8 309.6-63-38.5-129.4 208.2L531.8 600z"}],["path",{"fill":"currentColor","d":"m468.8 271.1-337.6 80.5-120.7 189h290.4l38.5-61.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevModxIcon;
