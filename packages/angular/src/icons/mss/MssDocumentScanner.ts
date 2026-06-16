import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-document-scanner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDocumentScanner {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-745v-175h175v60H140v115H80Zm740 0v-115H705v-60h175v175h-60ZM80-40v-175h60v115h115v60H80Zm625 0v-60h115v-115h60v175H705ZM260-220h440v-520H260v520Zm-60 60v-640h560v640H200Zm170-410h220v-60H370v60Zm0 120h220v-60H370v60Zm0 120h220v-60H370v60ZM260-220v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDocumentScanner;
