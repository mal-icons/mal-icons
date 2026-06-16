import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-fence",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFence {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M210-160v-170h-90v-60h90v-100h-90v-60h90v-140l110-110 80 80 81-80 80 80 80-80 110 110v140h89v60h-89v100h89v60h-89v170H210Zm60-390h100v-115l-50-50-50 50v115Zm160 0h100v-115l-50-50-50 50v115Zm161 0h99v-115l-50-50-49 49v116ZM270-390h100v-100H270v100Zm160 0h100v-100H430v100Zm161 0h99v-100h-99v100ZM270-220h100v-110H270v110Zm160 0h100v-110H430v110Zm161 0h99v-110h-99v110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFence;
