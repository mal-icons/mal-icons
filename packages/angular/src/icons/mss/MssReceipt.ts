import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-receipt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssReceipt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-81v-798l60 59.85L240-879l60 59.85L360-879l60 59.85L480-879l60 59.85L600-879l60 59.85L720-879l60 59.85L840-879v798l-60-59.85L720-81l-60-59.85L600-81l-60-59.85L480-81l-60-59.85L360-81l-60-59.85L240-81l-60-59.85L120-81Zm117-215h490v-60H237v60Zm0-154h490v-60H237v60Zm0-155h490v-60H237v60Zm-57 423h600v-596H180v596Zm0-596v596-596Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssReceipt;
