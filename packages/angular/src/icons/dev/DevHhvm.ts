import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-hhvm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHhvm {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M304.8 199.2h184.6l-184.6 182z"}],["path",{"fill":"currentColor","d":"M98.1 405h184l-184 186.7zm0-216L290.50.4V192L98.2 384zm403.8 19.2v196.1L304.8 600V403.9zm-0.1-23.5H317L501.8 0z"}],["path",{"fill":"currentColor","d":"M290.4 389.8h-179l179-179.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHhvm;
