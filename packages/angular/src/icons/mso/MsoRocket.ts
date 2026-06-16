import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-rocket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRocket {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m220-168 106-43q-13-38-22.5-77T287-367l-67 45v154Zm166-52h188q22-59 34-117.5T620-440q0-115-33-202T480-807q-74 78-107 165t-33 202q0 44 12 102.5T386-220Zm94-230q-29 0-49.5-20.5T410-520q0-29 20.5-49.5T480-590q29 0 49.5 20.5T550-520q0 29-20.5 49.5T480-450Zm260 282v-154l-67-45q-7 40-16.5 79T634-211l106 43ZM480-889q102 90 151 199.5T680-440v5l93 63q13 8 20 21t7 28v243l-200-80H360L160-80v-243q0-15 7-28t20-21l93-63v-5q0-140 49-249.5T480-889Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRocket;
