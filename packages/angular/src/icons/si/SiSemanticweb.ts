import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-semanticweb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSemanticweb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.6 0s-1.52 5.81-8.52 2.66c-0.78-0.35-0.95-0.44-0.98-0.47L2.07 6.3l10.04 4.9s0.78-0.33 2.03-0.93C20.27 7.29 21.6 0 21.6 0zM1.59 8.49v10.45L10.95 24V13.24L1.59 8.49zm20.82 0l-9.36 4.76V24l9.36-5.07V8.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSemanticweb;
