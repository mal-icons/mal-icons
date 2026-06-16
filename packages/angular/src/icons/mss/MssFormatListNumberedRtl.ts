import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-format-list-numbered-rtl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFormatListNumberedRtl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M680-80v-60h100v-30h-60v-60h60v-30H680v-60h160v90l-30 30 30 30v90H680Zm0-280v-150h100v-30H680v-60h160v150H740v30h100v60H680Zm60-280v-180h-60v-60h120v240h-60ZM120-209v-60h471v60H120Zm0-243v-60h471v60H120Zm0-243v-60h471v60H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFormatListNumberedRtl;
