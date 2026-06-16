import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-chat-paste-go",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssChatPasteGo {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m720-124-42-42 73-74H570v-60h181l-73-74 42-42 146 146-146 146Zm-600 4v-680h640v283q-10-2-20-2.5t-20-0.5q-5 0-10 0.17-5 0.17-10 0.83v-221H180v440h301q-0.67 5-0.83 10-0.17 5-0.17 10 0 10 0.5 20t2.5 20H240L120-120Zm160-460h320v-60H280v60Zm0 170h200v-60H280v60ZM180-300v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssChatPasteGo;
