import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-insert-page-break",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoInsertPageBreak {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-24.75 0-42.37-17.62T160-140v-170h60v170h520v-170h60v170q0 24.75-17.62 42.38T740-80H220Zm-60-410v-330q0-24.75 17.63-42.37T220-880h361l219 219v171h-60v-144H551v-186H220v330h-60Zm190 120v-60h260v60H350Zm320 0v-60h250v60H670Zm-630 0v-60h250v60H40Zm440-120Zm0 180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoInsertPageBreak;
