import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-vertical-split",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrVerticalSplit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M143-367q-12.75 0-21.37-8.62T113-397q0-12 8.5-21t20.5-9h270q12.75 0 21.38 8.63T442-397q0 12-8.5 21t-20.5 9H143Zm0 167q-12.75 0-21.37-8.62T113-230q0-12 8.5-21t20.5-9h270q12.75 0 21.38 8.63T442-230q0 12-8.5 21t-20.5 9H143Zm0-333q-12.75 0-21.37-8.62T113-563q0-12 8.5-21t20.5-9h270q12.75 0 21.38 8.63T442-563q0 12-8.5 21t-20.5 9H143Zm0-167q-12.75 0-21.37-8.62T113-730q0-12 8.5-21t20.5-9h270q12.75 0 21.38 8.63T442-730q0 12-8.5 21t-20.5 9H143Zm466 0v440-440Zm-30 500q-12.75 0-21.37-8.62T549-230v-500q0-12.75 8.63-21.37T579-760h239q12.75 0 21.38 8.63T848-730v500q0 12.75-8.62 21.38T818-200H579Zm30-500v440h179v-440H609Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrVerticalSplit;
