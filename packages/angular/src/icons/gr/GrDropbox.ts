import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-dropbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDropbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M7.06,1 L0,5.61 L4.88,9.52 L12,5.12 L7.06,1 Z M0,13.43 L7.06,18.04 L12,13.91 L4.88,9.52 L0,13.43 Z M12,13.91 L16.94,18.04 L24,13.43 L19.12,9.52 L12,13.91 Z M24,5.61 L16.94,1 L12,5.12 L19.12,9.52 L24,5.61 Z M12.01,14.8 L7.06,18.91 L4.94,17.53 L4.94,19.08 L12.01,23.32 L19.09,19.08 L19.09,17.53 L16.97,18.91 L12.01,14.8 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDropbox;
