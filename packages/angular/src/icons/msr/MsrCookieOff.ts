import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cookie-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCookieOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m803-243-44-44q26-38 42-82.5t20-94.5q-54-20-87.5-59.5T692-614q-81-11-136.5-70T492-821q-59-2-111 14t-95 47l-43-43q55-42 121.5-60t138.89-18q18.84 0 32.73 11.5Q550-858 551-840q3 68 49 117t115 51q15 1 25 12.61T749-632q-2 42 27.5 73t71.22 41.71Q862-513 871-501.72q9 11.28 9 26.72 0 66-19 122t-58 110ZM339.88-358Q314-358 296-376.12q-18-18.12-18-44Q278-446 296.12-464q18.12-18 44-18Q366-482 384-463.88q18 18.12 18 44Q402-394 383.88-376q-18.12 18-44 18ZM480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-68 20-128t56-110L47-827q-9-9.07-9-21.53Q38-861 47.05-870q9.05-9 21.5-9Q81-879 90-870l765 765q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q821-54 812-63l-94-93q-50 36-110 56T480-80Zm0-60q54.64 0 103.82-15.5Q633-171 675-199L199-675q-28 42-43.5 91.18Q140-534.64 140-480q0 145 97.5 242.5T480-140Zm-43-297Zm86-86Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCookieOff;
