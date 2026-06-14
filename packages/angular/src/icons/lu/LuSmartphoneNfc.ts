import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-smartphone-nfc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSmartphoneNfc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"width":"7","height":"12","x":"2","y":"6","rx":"1"}],["path",{"d":"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{"d":"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{"d":"M19.91 4.1a15.91 15.91 0 0 1 0.01 15.8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSmartphoneNfc;
