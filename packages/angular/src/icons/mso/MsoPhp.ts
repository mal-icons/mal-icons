import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-php",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPhp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-360v-240h152q20 0 34 14t14 34v64q0 20-14 34t-34 14H168v80h-48Zm258 0v-240h48v89h108v-89h48v240h-48v-103H426v103h-48Zm282 0v-240h152q20 0 34 14t14 34v64q0 20-14 34t-34 14H708v80h-48ZM168-488h104v-64H168v64Zm540 0h104v-64H708v64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPhp;
