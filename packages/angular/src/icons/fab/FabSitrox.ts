import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-sitrox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabSitrox {
  readonly viewBox = "0 0 448 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M212.44 0.01V0H448V128H64C64 57.6 141.76 0.48 212.44 0.01ZM237.26 192V192.01C307.14 192.48 384 249.6 384 320H210.81V320C140.92 319.56 64 262.42 64 192H237.26ZM235.57 511.99C306.25 511.52 384 454.4 384 384H0V512H235.57V511.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabSitrox;
