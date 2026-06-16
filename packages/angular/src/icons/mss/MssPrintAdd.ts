import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-print-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPrintAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-588h680-680Zm102 468v-176H80v-352h800v193q-14-9-28.5-15.5T820-482v-106H140v232h102v-76h376q-14.09 12.83-25.55 27.91Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28H242Zm416-528v-132H302v132h-60v-192h476v192h-60Zm74 525v-120H612v-60h120v-120h60v120h120v60H792v120h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPrintAdd;
