import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-home-work",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHomeWork {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M697-623h60v-60h-60v60Zm0 171h60v-60h-60v60Zm0 170h60v-60h-60v60Zm-56 162v-60h219v-600H465v112l-60-42v-130h515v720H641Zm-601 0v-390l271-194 270 194v390H364v-201H258v201H40Zm60-60h98v-201h226v201h97v-299L311-630 100-478.58V-180Zm541-365ZM424-180v-201H198v201-201h226v201Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHomeWork;
