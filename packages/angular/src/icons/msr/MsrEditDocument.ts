import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-edit-document",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEditDocument {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h315q12.44 0 23.72 5T578-862l204 204q8 8 13 19.28 5 11.28 5 23.72v131h-60v-116H550q-12.75 0-21.37-8.62T520-630v-190H220v680h300v60H220Zm0-60v-680 680Zm536-223 28 28-164 164v51h51l164-164 28 28L696-89q-5 5-10.22 7-5.22 2-10.78 2h-80q-6 0-10.5-4.5T580-95v-80q0-5.56 2-10.78Q584-191 589-196l167-167Zm107 107L756-363l61-61q9-9 21-9t21 9l65 65q9 9 9 21t-9 21l-61 61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEditDocument;
