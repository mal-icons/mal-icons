import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-edit-document",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEditDocument {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h340l240 240v156h-60v-116H520v-220H220v680h300v60H220Zm0-60v-680 680Zm536-223 28 28-164 164v51h51l164-164 28 28L687-80H580v-107l176-176Zm107 107L756-363l61-61q9-9 21-9t21 9l65 65q9 9 9 21t-9 21l-61 61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEditDocument;
