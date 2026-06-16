import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-document-scanner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDocumentScanner {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-745v-175h175v60H140v115H80Zm740 0v-115H705v-60h175v175h-60ZM80-40v-175h60v115h115v60H80Zm625 0v-60h115v-115h60v175H705ZM260-220h440v-520H260v520Zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h440q24 0 42 18t18 42v520q0 24-18 42t-42 18H260Zm110-410h220v-60H370v60Zm0 120h220v-60H370v60Zm0 120h220v-60H370v60ZM260-220v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDocumentScanner;
