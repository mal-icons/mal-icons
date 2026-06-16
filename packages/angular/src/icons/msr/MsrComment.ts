import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-comment",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrComment {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M270-400h420q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T690-460H270q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T270-400Zm0-130h420q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T690-590H270q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T270-530Zm0-130h420q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T690-720H270q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T270-660ZM140-240q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v668q0 19.69-18.5 27.34Q843-117 829-131L720-240H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrComment;
