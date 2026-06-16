import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-eda",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEda {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M287-490v-390h60v390h-60Zm166 0v-430h60v430h-60Zm167 188v-538h60v503l-60 35ZM180-100h397l250-251-344 201-128-170H180v220Zm-60 60v-340h264.92L497-230l183-107 145-84 91 68L603-40H120Zm60-340h-60v-420h60v420Zm0-110h440-440Zm0 390h397-397Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEda;
