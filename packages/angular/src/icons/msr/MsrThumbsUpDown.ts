import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-thumbs-up-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrThumbsUpDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M60-400q-24 0-42-18T0-460v-266q0-12.44 5-23.72T18-769l161-161q8-8 21.5-10t24.5 3q11 5 16.5 17t3.5 23l-31 137h206q36 0 55.5 33t5.5 66l-95 224q-7 17-21.86 27T331-400H60Zm270-60 90-209v-31H139l28-133L60-725v265h270ZM735-22q-11-5-16.5-17.34T715-63l31-137H540q-36 0-55.5-33t-5.5-66l95-224q7-17 21.86-27T629-560h271q24 0 42 18t18 42v266q0 12.44-5 23.72T942-191L781-30q-8 8-21.5 10.5T735-22ZM630-500l-90 209v31h281l-28 133 107-108v-265H630ZM60-460v-265 265Zm840-40v265-265Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrThumbsUpDown;
