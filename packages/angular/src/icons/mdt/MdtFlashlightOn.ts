import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-flashlight-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFlashlightOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8 7.39 2 3V20h4v-9.6l2-3.01V7H8v0.39zm4 5.11c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zM8 4h8v1H8z","opacity":".3"}],["path",{"d":"M6 2v6l2 3v11h8V11l2-3V2H6zm10 5.39-2 3.01V20h-4v-9.61l-2-3V7h8v0.39zM16 5H8V4h8v1z"}],["circle",{"cx":"12","cy":"14","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFlashlightOn;
