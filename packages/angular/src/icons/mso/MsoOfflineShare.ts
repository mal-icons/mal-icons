import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-offline-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoOfflineShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-40q-24 0-42-18t-18-42v-655h60v655h487v60H220Zm120-120q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h400q24 0 42 18t18 42v640q0 24-18 42t-42 18H340Zm0-120v60h400v-60H340Zm0-60h400v-400H340v400Zm70-92v-92.52Q410-542 420-551.5t27-9.5h131l-41-41 36-36 103 103-103 103-36-36 41-42H461v78h-51Zm-70-368h400v-60H340v60Zm0 0v-60 60Zm0 520v60-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoOfflineShare;
