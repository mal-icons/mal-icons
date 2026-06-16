import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-border-inner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBorderInner {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h60v60h-60Zm330 0v-329H120v-60h330v-332h60v332h330v60H510v329h-60Zm-165 0v-60h60v60h-60Zm330 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM120-285v-60h60v60h-60Zm660 0v-60h60v60h-60ZM120-615v-60h60v60h-60Zm660 0v-60h60v60h-60ZM120-780v-60h60v60h-60Zm165 0v-60h60v60h-60Zm330 0v-60h60v60h-60Zm165 0v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBorderInner;
