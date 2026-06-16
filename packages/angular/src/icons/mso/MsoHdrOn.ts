import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-hdr-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHdrOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M636-360v-240h155q23 0 36 13t13 36v61q0 17-11 29t-28 14l35 87h-49l-31-81h-72v81h-48Zm48-129h108v-63H684v63ZM120-360v-240h48v89h108v-89h48v240h-48v-103H168v103h-48Zm258 0v-240h155q23 0 36 13t13 36v142q0 23-13 36t-36 13H378Zm48-48h108v-144H426v144Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHdrOn;
