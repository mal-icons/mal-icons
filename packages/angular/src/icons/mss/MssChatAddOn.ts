import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-chat-add-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssChatAddOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-160v-680h640v283q-10-2-20-2.5t-20-0.5q-5 0-10 0.17-5 0.17-10 0.83v-221H180v440h301q-0.67 5-0.83 10-0.17 5-0.17 10 0 10 0.5 20t2.5 20H240L120-160Zm160-460h320v-60H280v60Zm0 170h200v-60H280v60Zm410 280v-120H570v-60h120v-120h60v120h120v60H750v120h-60ZM180-340v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssChatAddOn;
