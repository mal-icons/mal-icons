import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-scoreboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssScoreboard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M573-365v-230h169v230H573Zm50-50h69v-130h-69v130Zm-405 50v-139h119v-41H218v-50h169v139H268v41h119v50H218Zm237-158v-60h50v60h-50Zm0 146v-60h50v60h-50ZM80-160v-640h210v-80h60v80h260v-80h60v80h210v640H80Zm70-70h305v-60h50v60h305v-500H505v60h-50v-60H150v500Zm0 0v-500 500Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssScoreboard;
