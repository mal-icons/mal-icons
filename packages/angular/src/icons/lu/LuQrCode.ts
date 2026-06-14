import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-qr-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuQrCode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"width":"5","height":"5","x":"3","y":"3","rx":"1"}],["rect",{"width":"5","height":"5","x":"16","y":"3","rx":"1"}],["rect",{"width":"5","height":"5","x":"3","y":"16","rx":"1"}],["path",{"d":"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{"d":"M21 21v0.01"}],["path",{"d":"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{"d":"M3 12h0.01"}],["path",{"d":"M12 3h0.01"}],["path",{"d":"M12 16v0.01"}],["path",{"d":"M16 12h1"}],["path",{"d":"M21 12v0.01"}],["path",{"d":"M12 21v-1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuQrCode;
