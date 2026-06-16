import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-hdr-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHdrOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M818-57 70-805l43-43 748 748-43 43Zm-31-303-31-81h-72v79l-48-48v-190h155q23 0 36 13t13 36v61q0 17-11 29t-28 14l35 87h-49ZM684-489h108v-63H684v63Zm-102 25L446-600h87q23 0 36 13t13 36v87ZM120-360v-240h48v89h98v-89h48v240h-48v-103h-98v103h-48Zm258-168 48 48v72h72l47 47q-3 0.5-6 0.75t-6 0.25H378v-168Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHdrOff;
