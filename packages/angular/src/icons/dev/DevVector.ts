import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-vector",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevVector {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 600 44.3 450V150L300 0l255.7 150v300zM80 428.9l219.5 128.8L519 429V171L300 42.3 80 171z"}],["path",{"fill":"currentColor","d":"M410.2 218.5 320.6 376l29.2 51.4 118.8-209zm-100.1 0L220.5 376l29.2 51.4 118.8-209zm-178.7 0 118.8 208.9 29.2-51.4-89.6-157.5zm0 0 118.8 208.9 29.2-51.4-89.6-157.5zm178.7 0L220.5 376l29.2 51.4 118.8-209z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevVector;
