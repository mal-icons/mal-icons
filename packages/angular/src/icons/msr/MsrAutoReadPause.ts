import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-auto-read-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAutoReadPause {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M400.18-400q12.83 0 21.33-8.62T430-430v-260q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T370-690v260q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63Zm160 0q12.83 0 21.33-8.62T590-430v-260q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T530-690v260q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63ZM240-240 131-131q-14 14-32.5 6.34T80-152v-668q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240Zm-100-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAutoReadPause;
